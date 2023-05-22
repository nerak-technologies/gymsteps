import React from 'react';

export function Header() {
  return (
    <div className='header'>
        <nav className='header__menu'>
        <div className='header__menu__logo'>
        <div className='header__menu__logo__icon'>
            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/45522944/240052449-e3d3df69-c17d-4a5d-b42e-86f055297047.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230522%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230522T215647Z&X-Amz-Expires=300&X-Amz-Signature=763095cee835b87979fb352c059553dddd045218699b16f93ed1c29a856500de&X-Amz-SignedHeaders=host&actor_id=45522944&key_id=0&repo_id=515694520'/>
        </div>
        </div>
            <ul className='header__menu__links'>
                <li className='header__menu__link'>Home</li>
                <li className='header__menu__link'>Exercícios</li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;