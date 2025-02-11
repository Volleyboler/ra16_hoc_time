import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

const Pretty = DateTimePretty(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe 
        src={props.url} 
        title="Видео плеер" // Добавлен уникальный title
        border="0" // Замена frameBorder на CSS
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* <DateTime date={props.date} /> */}
      <Pretty date={props.date} />
    </div>
  )
}
