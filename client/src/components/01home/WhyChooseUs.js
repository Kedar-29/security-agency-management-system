import React from 'react';

function WhyChooseUs() {
  return (
    <section >
      <div >
        <br/><br/><br/><br/>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">WHY SHOULD YOU CHOOSE US?</h3>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Tactical Panthers</span> boasts a team of highly trained and experienced security professionals.
              They have a proven track record in providing security solutions for various industries and situations, making them a reliable choice.
            </li>
            <li>
              The company understands that each client's security needs are unique. They offer tailored security solutions
              that are designed to address specific risks and challenges faced by the client, ensuring maximum protection.
            </li>
            <li>
              Security threats can arise at any time, day or night. <span className="font-semibold">Tactical Panthers</span> provides round-the-clock monitoring
              and support to ensure their clients are protected at all times.
            </li>
            <li>
              The company invests in continuous training and development for their personnel, ensuring they stay current with 
              the best practices in the industry. This commitment to ongoing education reflects their dedication to providing 
              top-notch security services.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
