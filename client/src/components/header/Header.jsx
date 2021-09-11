import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitle'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg'
                src="https://landsoft.com.vn/matbien/uploads/2016/10/blog-background.jpg" alt='' />


        </div>
    )
}
