import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
  <div>
      
  <div className=" hidden md:block">
        <nav className="p-4">
          <ul className="flex justify-end item-center gap-40">
            <li><Link href="#About Me">About </Link></li>
            <li><Link href="#Future Plan">Future Plan</Link></li>
            <li><Link href="#Goals and Aspirations">Goals and Aspirations</Link></li>
          </ul>
        </nav>
      </div>

      <div className="rounded-full overflow-hidden w-48 h-49 justify-content:center flex  align-items:center">
        <Image src="/deshantkumar.png" alt="deshant kumar" width='250' height='500'></Image>
      </div>

      <div>
        <h1> Hi,I'm <b className="text-blue-900"> Deshant Kumar</b></h1><br />
        <p className="align-center flex justify-center text-2xl">Welcome to my portfolio.Here you will find more information About Me,what can i do,and my current skills mostly in terms of programming and technology.</p>
      </div>

      <br />
      <div>
        <h1>Connect with Me</h1> 
      </div>

      <nav className="bg-black text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          
          <a href="https://github.com/deshantk332720/deshant" target="_blank" className="w-10 h-10">
            <Image  src="/github.png" alt="GitHub" width='40' height='40' />
          </a>
          
          <a href="https://www.linkedin.com/feed/" target="_blank" className="w-10 h-10">
            <Image  src="/linkedin.png" alt="LinkedIn"width='40' height='40' />
          </a>
          
          <a href="https://www.npmjs.com/~deshant_kumarrathi3327" target="_blank" className="w-10 h-10">
            <Image  src="/npm.png" alt="NPM"width='40' height='40' />
          </a>
        </div>
      </nav>
      <br />
      <br />





      <section id="About Me">
        <h1><b>About Me</b></h1>
        <p><b>My name is Deshant Kumar. I am the student of grade 10</b>, residing in Karachi, Pakistan.I have been passionate about technology and programming. This passion has driven me to pursue learning beyond the standard curriculum.</p>
        <p> Alongside my school studies, I am actively learning and working with several programming languages and frameworks. I am currently focused on mastering Next.js, a popular React framework for building fast and dynamic web applications. Additionally, I am expanding my knowledge of Python, a versatile language that is essential for various programming tasks and data analysis. My foundation in JavaScript helps me create interactive and engaging web experiences. </p>
      </section>
      <br />
      <section id="Future Plan">
        <h1><b>Future Plan</b></h1>
        <p>My future plans include continuing my education in computer science and technology, working on real-world projects, and gaining practical experience. I am committed to fulfilling my dreams and making a significant contribution to the tech industry.</p>
      </section>
      <br />
      <section id="Goals and Aspirations">
        <h1><b>Goals and Aspirations</b></h1>
        <p><b>My aspiration is to become a proficient Full Stack Developer and Web Developer</b>. I am dedicated to acquiring a diverse skill set in both frontend and backend technologies. By pursuing this path, I aim to build innovative and impactful web solutions.</p>
      </section>
      <div>
        <title>
        <b>Deshant Kumar</b>
        </title>
      </div>
      

    </div>


);

}


