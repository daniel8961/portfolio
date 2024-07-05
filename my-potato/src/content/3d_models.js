import React from 'react';

const models = [
  {
    title: "#3 Headphones Hanger 06/08/2024",
    document: [
      "Inspired by: Not enough space on the desk",
      "I wanted to save space LOL so it won't be a mess on the desk",
      "This Hanger is NOT flexible. It only fits the current Desk I'm using. Whenever I take the headphones off from the hanger, it'll shift away from the table. I'll have to move it back which is a bit annoying. Will make an updated version."
    ],
    pictures: [
      { src: `${process.env.PUBLIC_URL}/assets/headphones_hanger_model.jpg`, alt: "Headphones Hanger Model" },
      { src: `${process.env.PUBLIC_URL}/assets/headphones_hanger_print.jpg`, alt: "Headphones Hanger Print" }
    ]
  },
  {
    title: "#2 Phone Stand 06/07/2024",
    document: [
      "Inspired by: Other wireless phone charging stand",
      "I wanted to place my phone on the desktop that's easy to check messages, and able to charge in the meanwhile.",
      "When I took it off from the printer, I tried too hard to rip off the support material that makes the stand (the two long stick) a little crooked. The cable locator (semicircle) was supposed to let the phone charging cable stuck in there but I didn't design it well."
    ],
    pictures: [
      { src: `${process.env.PUBLIC_URL}/assets/phone_holder_model.jpg`, alt: "Phone Holder Model" }
    ]
  },
  {
    title: "#1 Speaker Holder 05/03/2024",
    document: [
      "Inspired by: Fuzzy Sound When Playing",
      "This is the first 3D design I've ever made.",
      "When the speaker started playing, I noticed it made a fuzzy sound. After a few attempts, I discovered the reason for the noise: the sound was coming from the bottom of the speaker, and there was no extra space between the speaker and the contact surface."
    ],
    pictures: [
      { src: `${process.env.PUBLIC_URL}/assets/speaker_holder_model.png`, alt: "Speaker Holder Model" }
    ]
  }
];

function ThreeDModels() {
  return (
    <div id="3d-models-content">
      {models.map((model, index) => (
        <div className="party" key={index}>
          <div className="report">
            <h3>{model.title}</h3>
            {model.document.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="picture">
            {model.pictures.map((pic, index) => (
              <img key={index} src={pic.src} alt={pic.alt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThreeDModels;
