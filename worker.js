export default {
    async fetch(req) {
      const url = new URL(req.url)
  
      if (req.method === 'POST') {
        const formData = await req.formData() // Holt die hochgeladene Datei
        const file = formData.get('AD&D.pdf') // Der Name des Datei-Feldes im Formular
  
        // Holt den R2 Bucket
        const bucket = adnd2ndpdf // Deine R2-Umgebungsvariable
  
        // Speichert die Datei in R2
        await bucket.put(file.name, file.stream())
  
        return new Response('Datei erfolgreich hochgeladen!', { status: 200 })
      }
  
      return new Response('Verwende eine POST-Anfrage', { status: 400 })
    }
  }
  