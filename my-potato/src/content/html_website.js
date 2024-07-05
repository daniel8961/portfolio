import React from 'react';

const html_website = [
  {
    title: `Software Tools`,
    document: [
      `Domain Name Registration: GoDaddy`,
      `Web Hosting Provider: BlueHost (It offers extra space to store your website content)`,
      `cPanel (Comes within Bluehost. A Linux-based control panel to conveniently manage your web hosting)`
    ],
    pictures: []
  },
  {
    title: `1. Signup for a Domain Name`,
    document: [
      `I used GoDaddy for purchasing domain name. There are tons of options available, such as com, net, org, io, etc. I chose the cheap one that comes with a 3-year term.`
    ],
    pictures: []
  },
  {
    title: `2. Signup for a Web Hosting Provider`,
    document: [
      `I chose BlueHost because it comes with cPanel control option. After you register an account, follow the given instruction to link your domain to the web hosting provider, in this case, it'd be BlueHost.`
    ],
    pictures: []
  },
  {
    title: `3. Register an SSL certificate in BlueHost`,
    document: [
      `Log in to your BlueHost account`,
      `<ol>
        <li>Go to the 'Website' tab</li>
        <li>Select your site and click on 'Manage Site'</li>
        <li>Navigate to the 'Advanced' tab and click on 'Manage' under cPanel</li>
        <li>Navigate to 'SSL/TLS' under 'Security' section</li>
        <li>Follow the instructions to generate keys for CSR, CRT, and Private Keys. Then install SSL certificate.</li>
      </ol>`
    ],
    pictures: []
  },
  {
    title: `4. Upload your website files using cPanel`,
    document: [
      `Log in to cPanel from your BlueHost account`,
      `<ol>
        <li>Under the 'Files' section, click on 'File Manager'</li>
        <li>Navigate to the 'public_html' directory</li>
        <li>Use the 'Upload' option to upload your HTML files and any associated assets (like CSS, JS, images) to the public_html directory</li>
        <li>Add your HTML file to the root directory (public_html) and name it Index.html</li>
      </ol>`
    ],
    pictures: []
  },
  {
    title: `5. Test your website`,
    document: [
      `Open your web browser and enter your domain name`,
      `Verify that your website loads correctly and all links and assets function as expected`,
      `By following these steps, you can successfully upload your HTML website to the internet and make it accessible to visitors.`
    ],
    pictures: []
  }
];

function HTMLWebsite() {
  return (
    <div id="html-website-content">
      {html_website.map((item, index) => (
        <div className="party" key={index}>
          <div className="report">
            <h3>{item.title}</h3>
            {item.document.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </div>
          <div className="picture">
            {item.pictures.map((pic, index) => (
              <img key={index} src={pic.src} alt={pic.alt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HTMLWebsite;
