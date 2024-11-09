export interface NewsData {
    title: string;
    content: string;
  }
  
  export async function checkNews(data: NewsData): Promise<string> {
    try {
      const response = await fetch('/api/check_news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result.result; 
    } catch (error) {
      console.error('Error checking news:', error);
      throw new Error('Could not fetch the result');
    }
  }
  