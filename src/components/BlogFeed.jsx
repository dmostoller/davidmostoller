import { useState, useEffect } from 'react';
import { Container, Header, Card, Loader, Message, Icon, Button, Image } from 'semantic-ui-react';
import { HomeIcon } from './icons/home';
import { Link } from 'react-router-dom';

const BlogFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stripCdata = (text) => {
    return text.replace('<![CDATA[', '').replace(']]>', '');
  };

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // You'll need a CORS proxy if the RSS feed doesn't support CORS
        const response = await fetch('https://medium.com/feed/@dmostoller');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');

        const getExcerpt = (html) => {
          const div = document.createElement('div');
          div.innerHTML = html;
          const firstP = div.querySelector('p');
          if (!firstP) return '';

          // Keep links and formatting but make them safe
          const safeP = firstP.cloneNode(true);

          // Convert links to proper format
          safeP.querySelectorAll('a').forEach((a) => {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
          });

          // Replace &nbsp; with spaces
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

        const feedData = Array.from(items).map((item) => {
          const contentEncoded = item.getElementsByTagNameNS('*', 'encoded')[0]?.textContent || '';
          const cleanContent = stripCdata(contentEncoded);
          const excerpt = getExcerpt(cleanContent);
          const imageUrl = getFirstImage(cleanContent);

          return {
            title: item.querySelector('title')?.textContent || '',
            link: item.querySelector('link')?.textContent || '',
            description: excerpt,
            pubDate: item.querySelector('pubDate')?.textContent || '',
            image: imageUrl
          };
        });
        console.log('Processed items:', feedData.length);

        setFeedItems(feedData);
        setIsLoading(false);
      } catch (err) {
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
