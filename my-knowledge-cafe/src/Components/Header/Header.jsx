import Profile from '../../../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between px-5 py-3 items-center border-b-2'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img className='w-15' src={Profile} alt="" />
        </header>
    );
};

export default Header;