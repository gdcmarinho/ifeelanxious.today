import { Fraunces } from "next/font/google";

const fraunces = Fraunces({  
  weight: '400', 
  subsets: ["latin"] 
});

export default function Home() {
  return (
    <main>
      <span>ifeelanxious.today</span>
      <h1 className={fraunces.className}>Welcome, human.</h1>
      <p>Do you want to start a breathing exercise?</p>
      <button>Start exercise</button>
      <p>This project is entirely open source</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/77ZozI0rw7w?autoplay=1&playsinline=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>
  );
}
