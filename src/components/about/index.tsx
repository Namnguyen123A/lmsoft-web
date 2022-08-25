import * as React from 'react';
import "./main.scss";
import background from '../../assets/team-photo.jpg'

export interface IAboutProps {
}

export default function about (props: IAboutProps) {
  return (
    <div>
      <div className="about-intro">
        <div className="photo-intro" style={{backgroundImage: `url(${background})`}}>
            <div className="container-about">
                <div className="info-about">
                    <h1 className="">Remote development you can trust</h1>
                    <p>Mobile and Web applications built by real in-house teams</p>
                </div>
            </div>
        </div>
        <div className="mouse-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="118" height="64" viewBox="0 0 118 64">
              <path fill="#FFF" fill-rule="nonzero" d="M84.459 15.51c9.003 18.054 14.888 29.683 17.655 34.889 4.84 9.102 10.468 13.692 16.886 13.77H-1c6.12-.078 11.942-4.724 17.469-13.936C19.607 45 25.537 33.485 34.257 15.687 41.061 1.8 57.835-3.942 71.721 2.862A28 28 0 0 1 84.46 15.511z"></path>
          </svg>
          <div className="mouse">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="32" viewBox="0 0 21 32">
                  <path fill="#8B91ED" fill-rule="nonzero" d="M10.456 0c5.76 0 10.446 4.77 10.446 10.632V21.28c0 5.862-4.686 10.631-10.446 10.631S.01 27.141.01 21.28V10.632C.01 4.77 4.696 0 10.456 0zm9.286 21.28V10.632c0-5.21-4.166-9.45-9.286-9.45-5.12 0-9.285 4.24-9.285 9.45V21.28c0 5.21 4.165 9.45 9.285 9.45s9.286-4.24 9.286-9.45zM10.456 3.546c.32 0 .58.264.58.59v5.352c0 .327-.26.591-.58.591a.586.586 0 0 1-.58-.59V4.136c0-.327.26-.591.58-.591z"></path>
              </svg>
          </div>
        </div>
      </div>
    </div>
    
  );
}
