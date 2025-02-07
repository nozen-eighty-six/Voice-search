import { useEffect, useRef, useState } from "react";
import Search from "./Form/Search";
import SearchTable from "./Table/SearchTable";
import { getRecognitionInstance } from "../../services/voiceServices";
import { Link } from "react-router";
import { getUsersByName } from "../../services/userServices";
import { userInformation } from "../../data/users";

const VoiceSearchComponent = () => {
  const [data, setData] = useState(userInformation);
  const [form, setForm] = useState({});
  const refButton = useRef(null);
  const getDataByName = (data, name) => {
    const newData = getUsersByName(data, name);
    setData(newData);
  };

  useEffect(() => {
    const handleClick = (e) => {
      const recognition = getRecognitionInstance();
      /* if (e.target !== refButton.current) { 
        if (recognition) recognition.stop();
      }*/
      if (e.target === refButton.current) {
        console.log("Ready to receive a color command.");

        if (recognition) recognition.start();
      }

      if (recognition) {
        recognition.onresult = (event) => {
          const valor = event.results[0][0].transcript;

          setForm((prevForm) => {
            if (valor != "volver") {
              const updateForm = { ...prevForm, searched: valor };
              getDataByName(userInformation, updateForm.searched);
              return updateForm;
            } else {
              const updateForm = { ...prevForm, searched: "" };
              getDataByName(userInformation, updateForm.searched);
              return updateForm;
            }
          });
        };

        recognition.onspeechend = () => {
          console.log("Speech has stopped being detected.");
          recognition.stop();
        };

        recognition.onerror = (event) => {
          console.log("Error occurred in recognition: " + event.error);
        };
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="border border-gray-500 p-2 relative">
      <Link
        to={"/"}
        className="back-arrow absolute top-2 left-2 border py-2 px-3 bg-gray-300"
      >
        <span>{"Volver"} </span>
      </Link>
      <h2 className="text-center xs:mt-14 lg:mt-10 font-bold mb-7">
        Search user data by name
      </h2>
      <Search elementRef={refButton} form={form} setForm={setForm} />
      <SearchTable data={data} />
    </div>
  );
};

export default VoiceSearchComponent;
