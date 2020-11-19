import React from 'react';

function Phishing()  {

  return (
    <div className="Phishing" id="phishing"  align="center">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">You fell for our Phishing Scheme!</h5>
          <h5 class="card-subtitle mb-2 text-muted">Don't worry this is just a test</h5>
          <p class="card-text">This is a project created By Mitchell Knox, Hunter White, Jayden Rosenau, and Alex Zink for CSCI 489 - Social Implications of Computers at NDSU.
            Our goal for this project is to determine what proportion of students are susceptible to phishing schemes. We are tracking how many page views this site recieves,
            but we are not tracking any additional information so we will not know who visited the page, only the number of people who do. We thank you for participating in our study, if you have any questions you
            or would like to see our final presentation you can email us at <a href="#">mitchell.knox@ndsu.edu</a>. We have included some information below to help avoid phishing schemes in the future.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Where did I go wrong? (How to avoid and spot phishing schemes.)</h5>
          <ul>
            <li>Install a security software on your computer such as Norton or McAfee AntiVirus.</li>
            <li>Never give out personal information including usernames and passwords to random requests.</li>
            <li>Avoid clicking links from emails, instead navigate to the desired webpage in the browser. If you were to navigate to the Campus Connection page on your own to change your password you would have avoided our phishing scheme.</li>
            <li>Verify a sites URL, if it seems phishy it probably is. As you can see with our website the URL resembles nothing regarding NDSU or campus connection.</li>
          </ul>
          <p>For more information on phishing read what the 
            <a href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams#:~:text=to%20Report%20Phishing-,How%20to%20Recognize%20Phishing,%2C%20bank%2C%20or%20other%20accounts." >
            Federal Trade Comission </a>
            has to say.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Why should I be concerned?</h5>
          <h6 class="card-subtitle mb-2 text-muted">Phishing Schemes are constantly evolving so it is important to protect yourself from the latest attacks.</h6>
          <ul>
            <li>Most commonly phishing schemes are an attempt to steal information including passwords, social security numbers, or bank account numbers.</li>
            <li>Phishing emails may also include downloads for malicious software. So avoid downloading email attachments unless you can verify the source.</li>
          </ul>
          <p>For more information on phishing read what the 
            <a href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams#:~:text=to%20Report%20Phishing-,How%20to%20Recognize%20Phishing,%2C%20bank%2C%20or%20other%20accounts." >
            Federal Trade Comission </a>
            has to say.</p>
        </div>
      </div>
      <h3>We appolgize for our horrendous web design.</h3>
    </div>
  );
}

export default Phishing;
