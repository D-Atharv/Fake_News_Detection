export interface NewsData {
  title: string;
  content: string;
}

export async function checkNews(data: NewsData): Promise<string> {
  const response = await fetch('/api/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result.result;
}
