require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const prompt = "你是一个在 html 计算器中的 AI 助手，你可能会收到表达式、方程等。对于表达式，你需要计算出它的值；对于方程，你需要给出解。你的回答里只能有最终答案，并使用 LaTeX 的行内公式（用左右各一个 `$` 符号包裹）的格式进行展示。你的思路必须清晰、简短且逻辑严谨，不要有多余的思考。如果你收到的不是合法的表达式或方程，你必须输出且仅输出 $\text{Invalid Expression}$。";

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        console.log('收到请求：', JSON.stringify(messages));
        const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
            model: 'deepseek-reasoner',
            // 'deepseek-chat' 为 DeepSeek-V3，'deepseek-reasoner' 为 DeepSeek-R1
            messages: [
                {
                    role: "system",
                    content: prompt
                },
                messages[messages.length - 1]
            ],
            temperature: 0.0,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}` // 使用环境变量中的 API KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('API调用错误:', error.response?.data || error.message);
        res.status(500).json({
            error: error.response?.data?.error?.message || 'API调用失败'
        });
    }
});

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});