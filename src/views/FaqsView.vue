    <template>
        <div class="faq">
        <!-- FAQ Header Section -->
        <section class="faq-header">
            <img src="../assets/faq.png" alt="FAQ Header" class="faq-image" />
            <h1>Frequently Asked Questions</h1>
        </section>
    
        <!-- FAQ Content Section -->
        <div class="topic">
            <h1>FAQ</h1>
        </div>
        <section class="faq-content">
        
            <div class="faq-sidebar">
            <ul>
                <li
                v-for="(category, index) in categories"
                :key="index"
                :class="{ active: activeCategory === index }"
                @click="setActiveCategory(index)"
                >
                {{ category }}
                </li>
            </ul>
            </div>
    
            <div class="faq-questions">
            <div
                v-for="(question, index) in questions[activeCategory]"
                :key="index"
                class="faq-question"
            >
                <div class="faq-question-header" @click="toggleAnswer(index)">
                <span>{{ question.question }}</span>
                <span class="arrow">{{ activeQuestion === index ? "▼" : "▶" }}</span>
                </div>
                <div
                v-if="activeQuestion === index"
                class="faq-answer"
                >
                {{ question.answer }}
                </div>
            </div>
            </div>
        </section>
        </div>
    </template>
    
    <script>
    export default {
        name: "FAQ",
        data() {
        return {
            categories: ["Order", "Shipping", "Payment", "Refunds", "Other"],
            activeCategory: 0,
            activeQuestion: null,
            questions: [
            [
                { question: "How many countries do we ship to?", answer: "We ship to over 100 countries worldwide." },
                { question: "How long does the shipping take?", answer: "Shipping usually takes 5-10 business days." },
                { question: "How much is shipping cost?", answer: "Shipping costs vary by location and order size." },
            ],
            [
                { question: "What is the return policy?", answer: "You can return items within 30 days of purchase." },
                { question: "Are there tracking options?", answer: "Yes, we provide tracking for all orders." },
            ],
            [
                { question: "What payment methods are accepted?", answer: "We accept Visa, MasterCard, PayPal, and more." },
            ],
            [
                { question: "How do I get a refund?", answer: "Refunds are processed within 7-10 business days." },
            ],
            [
                { question: "Can I change my order?", answer: "Yes, you can change your order before it is shipped." },
            ],
            ],
        };
        },
        methods: {
        setActiveCategory(index) {
            this.activeCategory = index;
            this.activeQuestion = null; // Reset active question
        },
        toggleAnswer(index) {
            this.activeQuestion = this.activeQuestion === index ? null : index;
        },
        },
    };
    </script>
    
    <style scoped>
    /* General Styling */
    .faq {
        font-family: "Arial", sans-serif;
        color: #333;
        width: 1440px;
        margin: 0 auto;
    }
    
    /* FAQ Header Styling */
    .faq-header {
        position: relative;
        text-align: center;
        color: #333;
        display: flex;
        width: 100%;
    }
    
    .faq-header img {
        width: 100%;
        height: 520px;
        object-fit: cover;
    }
    
    .faq-header h1 {
        position: absolute;
        bottom: 260px;
        left: 40%;
        padding: 10px 20px;
        font-size: 3rem;
        display: flex;
    }
    
    /* FAQ Content Styling */
    .faq-content {
        display: flex;
        margin-top: 68px;
    }
    .topic h1 {
        position: absolute;
        left: 35%;
        padding: 10px 20px;
        font-size: 2rem;
        display: flex;
    }
    
    /* Sidebar Styling */
    .faq-sidebar {
        flex: 1;
        background: #f4f4f4;
        padding: 20px;
        border-right: 1px solid #ddd;
    }
    
    .faq-sidebar ul {
        list-style: none;
        padding: 0;
    }
    
    .faq-sidebar li {
        padding: 10px;
        cursor: pointer;
        transition: background 0.3s;
    }
    
    .faq-sidebar li.active,
    .faq-sidebar li:hover {
        background: #dfefff;
        font-weight: bold;
    }
    
    /* Questions Section Styling */
    .faq-questions {
        flex: 3;
        padding: 20px;
    }
    
    .faq-question {
        margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
    }
    
    .faq-question-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        background: #fff;
        transition: background 0.3s;
    }
    
    .faq-question-header:hover {
        background: #f9f9f9;
    }
    
    .faq-answer {
        padding: 10px;
        background: #f9f9f9;
    }
    
    .arrow {
        font-size: 1.4rem;
    }
    </style>