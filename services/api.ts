export interface NewsData {
  title: string
  content: string
}

export async function checkNews(data: NewsData): Promise<string> {
  try {
    console.log("Sending data to API:", data)

    if (typeof data.title !== 'string' || data.title.trim() === '') {
      throw new Error("Title must be a non-empty string")
    }
    if (typeof data.content !== 'string' || data.content.trim() === '') {
      throw new Error("Content must be a non-empty string")
    }

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.title,
        text: data.content,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to fetch prediction')
    }

    const result = await response.json()
    console.log("API response:", result)
    return result.prediction

  } catch (error) {
    console.error("Error fetching prediction:", error)
    return 'Error fetching prediction'
  }
}
