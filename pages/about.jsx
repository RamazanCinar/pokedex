import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About() {
    return (
        <>
            <Header />
            <div className="">
                <div className="text-center">About</div>
                <div className=" w-4/6 flex mx-auto">Hi I'm Ramazan, a web developer, and I'd like to introduce you to my project: the Pokédex.
                    I chose Pokémon as the theme to enhance my development skills, simply because Pokémon are cool! 
                    Explore and discover my work. </div>
            </div>
            <Footer />
        </>
    )
}