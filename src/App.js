import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import Logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Modal/>
      
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Logo} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Application</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <ul>
            {/* <li>Nom complet : omar kandil</li> */}
          </ul>
        </p>
    </div>
</a>

    </div>
  );
}

export default App;
