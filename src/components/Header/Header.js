
import './Header.scss'

function Header() {
    return (
            <div className='header'>
                <h1>#todo</h1>
                <div className='header-menu'>
                    <ul>
                        <li active>
                            <a href='#'>
                                All

                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Active
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Completed
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Header