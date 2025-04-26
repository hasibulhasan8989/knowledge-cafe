import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between border-b-2 p-4 items-center max-w-7xl mx-auto mt-10 mb-10'>
            <h1 className='text-3xl font-bold text-amber-500' >Knowledge Cafe</h1> 
            <img src={profile} alt=""/>
            </div>
        </div>
    );
};

export default Header;