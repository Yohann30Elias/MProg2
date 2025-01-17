import React from "react";
import "../style/Umgebung.css";

import Winti from "../bilder/Winti.jpg";
import nefti from "../bilder/nefti.jpg";
import loch from "../bilder/loch.jpg";
import embrach from "../bilder/embrach.jpg";
import oberembrach from "../bilder/oberembrach.jpg";


function Umgebung() {
  const contentBlocks = [
    {
      title: "Winterthur",
      text: "Winterthur, nur wenige Kilometer von Pfungen entfernt, ist eine lebendige Stadt, die für ihre kulturelle Vielfalt und historische Bedeutung bekannt ist. Die Stadt bietet zahlreiche Museen, darunter das bekannte Kunstmuseum Winterthur, sowie eine charmante Altstadt mit zahlreichen Geschäften und Restaurants. Winterthur ist auch ein wichtiger Wirtschaftsstandort und ein Zentrum für Innovation und Bildung. Mit einer exzellenten Anbindung an Pfungen ist Winterthur sowohl für Freizeitaktivitäten als auch für berufliche Möglichkeiten schnell erreichbar. Es ist der perfekte Ort für alle, die das urbane Leben mit einer angenehmen Nähe zur Natur verbinden möchten.",
      image: Winti,
    },
    {
      title: "Neftenbach",
      text: "Neftenbach liegt in unmittelbarer Nähe zu Pfungen und ist ein ruhiges, ländliches Dorf, das für seine hohe Lebensqualität bekannt ist. Umgeben von Feldern und Wäldern, bietet Neftenbach eine idyllische Atmosphäre, ideal für Spaziergänge und Outdoor-Aktivitäten. Das Dorf hat eine enge Gemeinschaft, und der Ort ist perfekt für Familien, die das ländliche Leben genießen möchten, ohne auf die Annehmlichkeiten der nahegelegenen Städte verzichten zu müssen. Neftenbach bietet eine gute Anbindung an Winterthur und Pfungen, sodass es sowohl ruhig als auch verkehrstechnisch gut gelegen ist.",
      image: nefti,
    },
    {
      title: "Dättlikon",
      text: "Dättlikon ist ein kleines, idyllisches Dorf in der Umgebung von Pfungen, das für seine ländliche Ruhe und Nähe zur Natur bekannt ist. Umgeben von Wiesen und Feldern, bietet der Ort zahlreiche Möglichkeiten für Spaziergänge und Radtouren. Dättlikon hat sich seinen dörflichen Charme bewahrt, während es gleichzeitig eine gute Anbindung an die benachbarten Städte wie Winterthur und Pfungen bietet. Mit einer freundlichen und engen Gemeinschaft ist Dättlikon der ideale Ort für Menschen, die das Leben auf dem Land schätzen und dennoch schnell die urbanen Vorteile der Umgebung nutzen möchten.",
      image: loch,
    },
    {
      title: "Embrach",
      text: "Embrach ist ein charmantes Dorf, das nur eine kurze Entfernung von Pfungen entfernt liegt und für seine ruhige, ländliche Atmosphäre bekannt ist. Umgeben von Natur, bietet Embrach zahlreiche Freizeitmöglichkeiten wie Wandern und Radfahren. Die gute Verkehrsanbindung an Winterthur und Zürich macht den Ort besonders attraktiv für Pendler. Neben der idyllischen Lage zeichnet sich Embrach durch eine freundliche Dorfgemeinschaft und eine gute Infrastruktur aus. Es ist ein idealer Ort für Menschen, die Ruhe und Natur genießen möchten, aber dennoch die Nähe zu städtischen Annehmlichkeiten schätzen.",
      image: embrach,
    },
    {
      title: "Oberembrach",
      text: "Oberembrach ist ein kleines, malerisches Dorf oberhalb von Embrach, das sich durch seine ländliche Idylle und den wunderschönen Blick auf die umliegenden Hügel und Wälder auszeichnet. Der Ort bietet eine ruhige Lebensqualität, ideal für Naturliebhaber und diejenigen, die dem hektischen Stadtleben entfliehen möchten. Oberembrach ist perfekt für Wanderungen und Spaziergänge in unberührter Natur. Trotz seiner ländlichen Lage ist es gut an die benachbarten Orte wie Embrach und Winterthur angebunden, sodass Bewohner die Vorteile beider Welten genießen können – Ruhe und Natur sowie die Nähe zu urbanen Zentren.",
      image: oberembrach,
    },
  ];

  return (
    <div className="umgebung-page">
      <div className="content">
        {contentBlocks.map((block, index) => (
          <div
            className={`content-row ${index % 2 === 0 ? "row-reverse" : ""}`}
            key={index}
          >
            <div className="content-box">
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </div>
            <div className="content-box image-box"><img src={block.image} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Umgebung;
