import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

// Inicializa el proveedor de modelos de IA con la clave de API
const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

// Elementos principales
const app = document.querySelector('#app')
const submitBtn = document.querySelector('#submit')
const form = document.querySelector('#form')

// Maneja el evento de envío del formulario
form.addEventListener('submit', async e => {
    e.preventDefault()

    const prompt = document.querySelector('#prompt').value

    if (prompt.trim() === '') {
        alert('La consulta no puede ir vacía')
        return
    }

    submitBtn.disabled = true
    document.querySelector('#prompt').value = '' // Limpia el campo de consulta

    // Crea un bloque para la consulta y respuesta
    const chatBlock = document.createElement('div')
    chatBlock.className = 'chat-block'
    chatBlock.style.marginBottom = '20px'
    chatBlock.style.padding = '10px'
    chatBlock.style.border = '1px solid #ddd'
    chatBlock.style.borderRadius = '8px'

    // Muestra la consulta del usuario
    const userPrompt = document.createElement('div')
    userPrompt.textContent = `Tú: ${prompt}`
    userPrompt.style.fontWeight = 'bold'
    chatBlock.appendChild(userPrompt)

    // Contenedor para la respuesta de la IA
    const aiResponse = document.createElement('div')
    aiResponse.textContent = '\nIA: '
    chatBlock.appendChild(aiResponse)

    app.appendChild(chatBlock)
    app.scrollTop = app.scrollHeight // Baja al final

    try {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'Eres IA que conoce todo los temas',
            temperature: 0
        })

        for await (const text of result.textStream) {
            aiResponse.append(text)
            app.scrollTop = app.scrollHeight // Baja al final
        }
    } catch (error) {
        aiResponse.textContent = 'Ocurrió un error al procesar la consulta.'
        console.error(error)
    } finally {
        submitBtn.disabled = false
    }
})