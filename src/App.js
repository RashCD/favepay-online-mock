import './App.css';
import Input from './components/Input';
import { fetchQRCodes } from './api/fetch';

const LABEL_LIST = [
  { name: 'price', desc: 'Price', placeholder: 'Total payment amount' },
  {
    name: 'reference',
    desc: 'Reference',
    placeholder: 'Unique string',
  },
  { name: 'appId', desc: 'App ID', placeholder: 'Client ID issued by Fave' },
  { name: 'outletId', desc: 'Outlet ID', placeholder: 'Partner outlet id' },
  {
    name: 'emailDetails',
    desc: 'Email Details',
    placeholder: 'test@test.com',
  },
  { name: 'phoneDetails', desc: 'Phone Details', placeholder: '012345678' },
  { name: 'locationDetails', desc: 'Location Details', placeholder: 'xyz' },
];

const App = () => {
  const reduceLabelListToObject = (e) => {
    return LABEL_LIST.reduce(
      (accumulated, current, index) => ({
        ...accumulated,
        [current.name]: e.target[index].value,
      }),
      {}
    );
  };

  const onSubmitForm = (e) => {
    const labelParams = reduceLabelListToObject(e);

    fetchQRCodes(labelParams).then((response) => {
      if (response.code) window.location.replace(response.code);
      else alert('error');
    });
  };

  return (
    <div className="App flex h-screen w-screen">
      <div className="flex flex-row items-center justify-center w-full">
        <form
          action="#"
          className="border-gray-100 border-t flex flex-col form-container items-start p-7 rounded-xl shadow-md w-1/2"
          onSubmit={onSubmitForm}
        >
          {LABEL_LIST.map((label) => (
            <Input key={label.name} {...label} />
          ))}
          <button
            type="submit"
            className="bg-blue-400 duration-300 font-bold h-12 hover:opacity-100 hover:scale-110 hover:scale-y-110 hover:shadow-lg mt-7 opacity-80 p-2 rounded self-center transform transition w-60"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
