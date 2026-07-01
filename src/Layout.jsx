const Header =() => {
    return <h1>i love you</h1>
}


const Footer = () => {
    return <h1>hani</h1>
}

const WhyChooseUs = ()=>{
    return <p>because you treated my Heart</p>
}

const Layout =() => {
    return (
        <div>
            <Header />
            <main> 
            < WhyChooseUs />
            </main>
            <Footer />
        </div>
    )
}
export default Layout;