import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const faqData = [
    { id: 1, question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
    { id: 2, question: "Feugiat scelerisque varius morbi enim nunc faucibus?", answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium." },
    { id: 3, question: "Dolor sit amet consectetur adipiscing elit pellentesque?", answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit." },
    { id: 4, question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?", answer: "Aperiam itaque sit optio et unde. Neque reiciendis ab. Odit natus incidunt aut ut unde facilis delectus sit. Corporis eum nihil cumque veritatis magnam." },
    { id: 5, question: "Tempus quam pellentesque nec nam aliquam sem et tortor?", answer: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan." },
    { id: 6, question: "Perspiciatis quod quo quos nulla quo illum ullam?", answer: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." }
  ];

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="faq-list">
          {faqData.map((item) => (
            <div key={item.id} className={`faq-item ${activeId === item.id ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(item.id)}>
                <span>{item.question}</span>
                <i className={`bi ${activeId === item.id ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;