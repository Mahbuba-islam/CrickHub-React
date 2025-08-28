import NewsLetter from "../NewsLetter/NewsLetter";
const Footer = () => {
    return (
        <div className="w-full bg-black ">
        <footer class=" relative  text-gray-300  pt-11 ">
  <NewsLetter></NewsLetter>
  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-20 mt-16">
   
    <div>
      <h3 class="text-lg font-semibold mb-3">About Us</h3>
      <p class="text-sm">CricDazzle is your go-to fantasy cricket platform. Build your dream team, compete with friends, and climb the leaderboard!</p>
    </div>

  
    <div>
      <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-white transition">Home</a></li>
        <li><a href="#" class="hover:text-white transition">Features</a></li>
        <li><a href="#" class="hover:text-white transition">Teams</a></li>
        <li><a href="#" class="hover:text-white transition">Leaderboard</a></li>
        <li><a href="#" class="hover:text-white transition">Cricket</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-3">Subscribe</h3>
       <p class="text-sm">CricDazzle is your go-to fantasy cricket platform. Build your dream team, compete with friends, 
        and climb the leaderboard!</p>

        <form class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mt-4">
    <input type="email" placeholder="Enter your email" class="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <button type="submit" class="px-6 py-2 bg-[linear-gradient(to_right,_#FF69B4,#FFD700)] text-black font-semibold rounded-md hover:bg-blue-700 transition">Subscribe</button>
  </form>
    </div>

    </div>
    <hr className="mx-8"/>
    <div class="sm:col-span-1 flex items-end justify-center py-4">
      <p class="text-sm text-center sm:text-right">© 2023 CricDazzle. All Rights Reserved.</p>
    </div>
  
</footer>

        </div>
    );
};

export default Footer;