import { useState, useEffect } from 'react';
import { Container, Header, Card, Loader, Message, Icon, Button, Image } from 'semantic-ui-react';
import { HomeIcon } from './icons/home';
import { Link } from 'react-router-dom';

const BlogFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const API_KEY = import.meta.env.VITE_RSS2JSON_KEY || '';
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dmostoller&api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Feed fetch failed');
        }
        const data = await response.json();

        // Helper functions remain the same
        const getExcerpt = (html) => {
          const div = document.createElement('div');
          div.innerHTML = html;
          const firstP = div.querySelector('p');
          if (!firstP) return '';

          const safeP = firstP.cloneNode(true);
          safeP.querySelectorAll('a').forEach((a) => {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
          });

          return safeP.innerHTML
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        };

        const getFirstImage = (html) => {
          const div = document.createElement('div');
          div.innerHTML = html;
          const firstImg = div.querySelector('img');
          return firstImg ? firstImg.src : null;
        };

        const feedData = data.items.map((item) => ({
          title: item.title,
          link: item.link,
          description: getExcerpt(item.description),
          pubDate: item.pubDate,
          image: item.thumbnail || getFirstImage(item.description)
        }));

        setFeedItems(feedData);
        setIsLoading(false);
      } catch (err) {
        console.error('Feed error:', err);
        setError('Failed to fetch blog feed');
        setIsLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (isLoading) return <Loader active>Loading Feed...</Loader>;
  if (error)
    return (
      <Message negative>
        <Message.Header>{error}</Message.Header>
      </Message>
    );

  return (
    <Container style={{ padding: '2em 0' }}>
      <Header
        as="h1"
        dividing
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Icon name="rss" size="large" />
        <Header.Content style={{ marginLeft: '0.5em' }}>
          Latest Blog Posts
          <Header.Subheader>Stay up to date with my latest articles</Header.Subheader>
        </Header.Content>
        <Link to="/" style={{ marginRight: '0.25em', color: 'black' }}>
          <HomeIcon />
        </Link>
      </Header>

      <Card.Group>
        {feedItems.map((item, index) => (
          <Card fluid key={index}>
            <Card.Content>
              {item.image && (
                <Image
                  src={item.image}
                  size="small"
                  rounded
                  floated="left"
                  style={{
                    marginRight: '1em',
                    maxHeight: '150px',
                    objectFit: 'cover'
                  }}
                />
              )}
              <Card.Header style={{ paddingTop: '0.5em', paddingBottom: '0em' }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </Card.Header>
              <Card.Meta>
                <span className="date">Published on {new Date(item.pubDate).toLocaleDateString()}</span>
              </Card.Meta>
              <Card.Description>
                <div dangerouslySetInnerHTML={{ __html: item.description }} className="blog-excerpt" />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="linkify" />
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div style={{ textAlign: 'center', marginTop: '2em' }}>
        <Button
          as="a"
          href="https://medium.com/@dmostoller"
          target="_blank"
          rel="noopener noreferrer"
          primary
          circular
          size="large"
        >
          <Icon name="medium" />
          Read More on Medium
        </Button>
      </div>
    </Container>
  );
};

export default BlogFeed;
