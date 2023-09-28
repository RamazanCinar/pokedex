import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About() {
    return (
        <>
            <Header />
            <div className="">
                <div className="text-center text-5xl">About</div>
                <div className="w-3/4 mt-5 flex mx-auto text-justify text-2xl md:text-3xl">Hi I&apos;m Ramazan, a web developer, and I&apos;d like to introduce you to my project: the Pok&eacute;dex.
                    I chose Pok&eacute;mon as the theme to enhance my development skills, simply because Pok&eacute;mon are cool! 
                    Explore and discover my work. </div>
            </div>
            <Footer />
        </>
    )
}