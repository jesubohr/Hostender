import './style.css';

export default function Loader () {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-black opacity-50 z-50 flex items-center justify-center">
            <div className='spinner'>
                <div className='block'>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
            </div>
        </div>
    );
}
