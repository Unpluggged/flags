// App.js
import React from 'react';
import FlagVersion1 from './components/FlagVersion1/FlagVersion1';
import FlagVersion2 from './components/FlagVersion2/FlagVersion2';
import FlagVersion3 from './components/FlagVersion3/FlagVersion3';
import FlagVersion4 from './components/FlagVersion4/FlagVersion4';
import './App.css'

import flags from './components/lib/flagMap';

//Обязательным полем будет только countryCode, у всех остальных просов есть дефолтное значение

const App = () => (
  <div className="container">

    {/* Используется объект и обращение идет по ключам этого объекта, в объект ипортируются все картинки */}
    <div className="card">
      <div className="title">Ver1 <br /> obj</div>
      <div className="wrapperFlag">
        <FlagVersion1 countryCode={flags.RU} width={25} height={25}/>
      </div>
    </div>

    {/* Используется готовая библиотека, при ее использовании можно даже не создавать новый компонент */}
    <div className="card">
      <div className="title">Ver2</div>
      <div className="wrapperFlag">
        <FlagVersion2 countryCode='RU' width={25} height={25}/>
      </div>
    </div>

    {/* Используется объект и обращение идет по значению flag[countryCode.toLowerCase()] так я получаю SVG по коду страны*/}
    <div className="card">
      <div className="title">Ver3</div>
      <div className="wrapperFlag">
        <FlagVersion3 countryCode='EN' width={25} height={25}/>
      </div>
    </div>

    {/* Используется динамический импорт это дает возможность не создавать лишний файл с объектом */}
    <div className="card">
      <div className="title">Ver4</div>
      <div className="wrapperFlag">
        <FlagVersion4 countryCode='ru' width={25} height={25}/>
      </div>
    </div>
    {/* тут может быть проблема, так как динамический импорт может занимать какое то время, на этот случай можно рендерить лоадер */}
  </div>
);

export default App;