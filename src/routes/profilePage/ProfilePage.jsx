import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profilePage.scss'

function ProfilePage() {
    return (  
        <div className="profilePage">
            <div className='details'>
                <div className='wrapper'>
                    <div className='title'>
                       <h1>Mes Informations</h1> 
                       <button>Mettre à jour le profil</button>
                    </div>
                    <div className='info'>
                      <span>Avatar : 
                      <img 
                        src='./public/IMG_6713.jpg' 
                        alt='' />
                      </span>  
                      <span>Nom Utilisateur : <b>Imen Burassine</b></span>
                      <span>E-mail : <b>bourassineimen5@gmail.com</b></span>
                    </div>
                    <div className='title'>
                       <h1>Ma Liste</h1> 
                       <button>Crée une nouvelle publication</button>

                    </div>
                    <List/>
                    <div className='title'>
                       <h1>Liste des maisons enregistrées</h1> 
                       
                    </div>
                    <List/>

                </div>
            </div>
            <div className='chatContainer'>
                <div className='wrapper'>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;