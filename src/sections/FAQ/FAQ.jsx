import React from 'react';
import Accordion from '../../components/Accordion/Accordion'; // Adjust the path as necessary
import iconPhone from "../../assets/images/mainpage-light/faq/icon-phone-light.svg";
import iconBubble from "../../assets/images/mainpage-light/faq/icon-bubble-light.svg";

const FAQ = () => {
    const faqs = [
        {
            id: "a1",
            question: "Is any of my personal information stored in the app?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime eaque rerum aliquam nisi incidunt asperiores perferendis quaerat! Cum, ullam vitae iure libero enim aspernatur quo consequatur quaerat necessitatibus molestias deleniti inventore, asperiores eligendi placeat rem cupiditate numquam! Nam ratione illo totam. Incidunt voluptate, nihil eum quod exercitationem odit quia."
        },
        {
            id: "a2",
            question: "What formats can I download my transaction history in?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum eius deserunt odio culpa aperiam inventore nisi! Aliquam consectetur vero perferendis accusantium labore distinctio voluptatem atque enim, iusto doloremque voluptatibus quibusdam fugit quae totam quidem officia dicta expedita qui adipisci vel quisquam. Magnam cumque ullam non porro. Modi nostrum provident quam nobis excepturi, doloribus eaque dolores quidem architecto minus? Cupiditate ipsum a veniam! Quibusdam ea quod earum ratione dolores quis facilis dicta accusantium saepe quidem maxime eveniet, fugit illum impedit enim, sed reprehenderit at alias ullam provident accusamus nihil vero. Nemo neque obcaecati amet aliquam, corrupti est debitis deleniti explicabo numquam id, veritatis distinctio ad doloremque officiis, magnam officia adipisci commodi reiciendis quia vel. Quidem explicabo ducimus perferendis repellat numquam excepturi maxime vel nam ipsam ut. Ullam hic, itaque iste maxime ab numquam ea totam sapiente saepe incidunt aliquid odio nemo quia nisi et quo reiciendis sed eaque consequuntur est voluptatum similique minus sit. Veritatis, quaerat reprehenderit aut recusandae rerum distinctio obcaecati fuga, porro totam laborum nostrum praesentium at illo delectus dolor quod. Repellendus consequuntur, eligendi nobis minima porro eveniet quaerat aliquam molestiae asperiores ex dolorem quod quibusdam corporis voluptatem deserunt ipsa voluptatum voluptates aspernatur ut. Velit asperiores explicabo culpa, in blanditiis cupiditate tenetur accusamus repellat iste temporibus, eos atque eligendi."
        },
        {
            id: "a3",
            question: "Can I schedule future transfers?",
            answer: "Harum quam modi, in consectetur dolorum, quaerat ducimus aperiam natus rerum eius ex nihil. Quia eveniet veniam dolorum dolores consectetur placeat, ad totam error quibusdam facere odio, blanditiis adipisci dignissimos voluptatum ipsum commodi officiis harum aspernatur sapiente reprehenderit enim eaque! Tempore molestiae culpa numquam quis reiciendis rerum optio laboriosam similique. Odio explicabo, repellendus culpa dolor fugit, libero reiciendis esse et reprehenderit maxime tempora labore deleniti, in velit asperiores veniam temporibus nostrum rerum voluptate? Provident aperiam et omnis sint asperiores velit saepe neque, error quam magni in vero aspernatur ex culpa. Repudiandae sit suscipit itaque eum illum, debitis error. Iure nobis dolorem reiciendis aperiam culpa ex incidunt magnam, id ad? Error tempora consequatur quaerat incidunt laboriosam nam, sit ut repellendus. Eligendi, magni amet nulla repellendus dolore sint delectus autem libero cupiditate ipsa! Fugit excepturi error debitis placeat, beatae dolores iusto molestias dolore neque, autem, rerum voluptatem id. Velit fugit aperiam culpa minima id vero aut impedit, ipsa ex placeat facere beatae molestias odio, vitae reiciendis nam odit inventore in, nesciunt cumque quo. Non, dolorem ducimus, fugit et nisi veritatis rem atque placeat qui repudiandae modi sequi omnis error nobis exercitationem sit vero nulla excepturi autem natus officia aliquam architecto hic blanditiis! Reprehenderit reiciendis perspiciatis velit facilis odit blanditiis vitae expedita maiores explicabo, atque veritatis iusto nostrum dolores omnis ea, tempora eaque libero ab impedit! Soluta quibusdam saepe, reiciendis dicta omnis voluptatum nulla tenetur provident harum suscipit a optio, sint voluptate facere aut! Necessitatibus autem officia eligendi doloribus obcaecati, saepe ullam quisquam repudiandae unde recusandae ipsum beatae odio maiores nemo deleniti expedita vitae eveniet laborum voluptate sunt cumque veritatis ut. Ea, mollitia magnam dolorem soluta temporibus ab deserunt ullam asperiores odio molestiae, dolorum, accusantium nostrum provident. Quam consequatur laudantium blanditiis unde."
        },
        {
            id: "a4",
            question: "When can I use Banking App services?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        },
        {
            id: "a5",
            question: "Can I create my own password that is easy for me to remember?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        },
        {
            id: "a6",
            question: "What happens if I forget or lose my password?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        },
    ];

    return (
        <section id="faq" className="mt-4" aria-label="Frequently asked questions">
            <div className="faq-container">
                <div className="faq-heading-field">
                    <div className="faq-heading-text">
                        <h2>Any questions? Check out the FAQs</h2>
                        <p>Still have unanswered questions and need to get in touch?</p>
                    </div>
                </div>
                <div className="faq-accordion-box">
                    {faqs.map(faq => (
                        <Accordion key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                <div className="faq-m-contact">
                    <button id="m-contact-btn" className="btn btn-primary" aria-label="contact us now">
                        <label htmlFor="m-contact-btn">Contact us now</label>
                    </button>
                </div>

                <div className="faq-t-contact">
                    <button id="call-us" className="call-us tplus-style" aria-label="call us">
                        <img src={iconPhone} alt="phone icon" />
                        <p>Still have questions?</p>
                        <div className="call-us-flex contact-us">
                            <label htmlFor="call-us">Contact us</label>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </button>
                    <button id="message-us" className="message-us tplus-style" aria-label="message us">
                        <img src={iconBubble} alt="phone icon" />
                        <p>Still have questions?</p>
                        <div className="message-us-flex contact-us">
                            <label htmlFor="message-us">Contact us</label>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
