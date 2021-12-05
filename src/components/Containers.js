import Card from './Card'
import Middle from './Middle';

const Container = () => {
    return (
      <div className="bg-gray-200 h-full">
        <div className="flex p-2 space-x-3">
          <Card
            title="Cantidad de dispositivos"
            cantidad_devices={3}
            icon={1}
          />
          <Card title="Sensor de Temperarura" temperatura={10} icon={0} />
          <Card title="Sensor de Gas" gas={0.05} icon={2} />
          <Card title="Estado del GPS" estado={"Activo"} icon={3} />
        </div>
        <div className="flex ml-2 mt-2 space-x-2 mx-2">
          <Middle title="Sensor de temperatura"/>
          <Middle title="Sensor de humedad"/>
        </div>
      </div>
    );
}

export default Container
