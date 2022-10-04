const cheerio = require("cheerio");
const axios = require("axios");
const Scrape= ({address})=>{
  axios
    .get("https://rlselaw.com/property-listing/georgia-property-listings/")
    .then((res) => {
      const htmlData = res.data;
      const $ = cheerio.load(htmlData);
      $("tr", htmlData).each((index, element) => {
        const address = $(element).children(".property").text();
        const city = $(element).children(".city").text();
        const county = $(element).children(".county").text();
        const bid = $(element).children(".bid").text();
        console.log(address);
        let infoObject = {
          address: address,
          city: city,
          county: county,
          bid: bid,
        };
        
        const testArray=[]
      });
    });
    
  return (
    <div>
      
      <ul>
        <li>TEST</li>
       <li></li>
      </ul>
    </div>
  );
}

export default Scrape;
