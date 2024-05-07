import './chat.scss';
import { useState } from 'react';

function Chat() {
    const [chat,setChat] = useState(true)
    return (  
        <div className="chat">
            <div className='messages'>
                <h1>Messages</h1>
                <div className='message'>
                    <img src='./public/IMG_6713.jpg' alt='' />
                    <span>Imen Burassine</span>
                    <p>
                          User est entrain d ecrire ...
                    </p>
                </div>
                <div className='message'>
                    <img src='./public/IMG_6713.jpg' alt='' />
                    <span>Imen Burassine</span>
                    <p>
                          User est entrain d ecrire ...
                    </p>
                </div>
                <div className='message'>
                    <img src='./public/IMG_6713.jpg' alt='' />
                    <span>Imen Burassine</span>
                    <p>
                          User est entrain d ecrire ...
                    </p>
                </div>
                <div className='message'>
                    <img src='./public/IMG_6713.jpg' alt='' />
                    <span>Imen Burassine</span>
                    <p>
                          User est entrain d ecrire ...
                    </p>
                </div>
            </div>
            { chat && <div className='chatBox'>
                <div className='top'>
                    <div className='user'>
                        <img src='./public/IMG_6713.jpg' alt='' />
                        Imen Burassine
                    </div>
                    <span className='close' onClick={()=>setChat(null)}>X</span>
                </div>
                <div className='center'>
                    <div className='chatMessage'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                    <div className='chatMessage'>
                        <p>User</p>   
                        <span> il y a une heure</span>
                    </div>
                </div>
                <div className='bottom'>
                    <textarea ></textarea>
                    <button>Envoyer</button>
                </div>
            </div>}
        </div>
    )
}

export default Chat;