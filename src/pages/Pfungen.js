import React, { useState, useEffect } from "react";
import "../style/Pfungen.css";

// Images for the carousel
import Image1 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";
import Image2 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";
import Image3 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";

function Pfungen() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image1,
    Image2,
    Image3,
    Image1,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Switch image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const contentBlocks = [
    {
      title: "Eskimo",
      text: "Wenn man in Pfungen über Eskimo spricht, denken viele sofort an die Zeit, als hier noch die bekannten Eskimo-Decken hergestellt wurden. Es war ein wichtiger Teil unseres Dorfes und hat viele Familien über Generationen hinweg geprägt. Heute ist das ehemalige Fabrikgelände ein lebendiges Industrie- und Gewerbegebiet. Aber für uns Pfungener bleibt Eskimo mehr als nur ein Ort – es ist ein Stück Geschichte und ein Teil unserer Identität.",
      image: "TESTBILD 1",
    },
    {
      title: "Ziegelei",
      text: "Die Ziegelei in Pfungen war einst ein bedeutender Produktionsstandort für Baumaterialien, insbesondere Ziegel. Im 19. und 20. Jahrhundert wurden hier hochwertige Backsteine hergestellt, die für den regionalen Bau verwendet wurden. Das Gelände um die Ziegelei war geprägt von der Tongewinnung, die direkt vor Ort stattfand. Nach der Schließung der Ziegelei hat sich das Areal verändert und wird heute unterschiedlich genutzt. Dennoch bleibt die Ziegelei ein wichtiger Teil der industriellen Vergangenheit von Pfungen und ein Symbol für die Entwicklung des Dorfes.",
      image: "TESTBILD 2",
    },
    {
      title: "Villa Schlosshalde",
      text: "Die Villa Schlosshalde ist ein markantes Wahrzeichen von Pfungen und zeugt von der Geschichte und dem Wohlstand vergangener Zeiten. Erbaut im 19. Jahrhundert, war die prächtige Villa einst Wohnsitz einer wohlhabenden Familie und ist von einem weitläufigen Park umgeben. Heute dient sie als Ort für Veranstaltungen und kulturelle Anlässe, die das Leben in Pfungen bereichern. Die Villa Schlosshalde verbindet historische Architektur mit modernem Nutzen und bleibt ein Ort, der Bewohner und Besucher gleichermaßen fasziniert.",
      image: "TESTBILD 3",
    },
    {
      title: "Schule",
      text: "Die Schule Pfungen ist ein zentraler Bestandteil unseres Dorflebens und ein Ort, an dem Bildung und Gemeinschaft aufeinandertreffen. Mit modernen Schulgebäuden, engagierten Lehrpersonen und einem breiten Angebot für Kinder und Jugendliche bietet sie eine hervorragende Grundlage für die Zukunft unserer jungen Generation. Besonders stolz sind wir auf die enge Verbindung zwischen Schule und Dorfleben – hier wachsen die Kinder nicht nur mit Wissen, sondern auch mit einem starken Gemeinschaftsgefühl auf. Die Schule Pfungen steht für ein Umfeld, in dem Lernen Spaß macht und jede*r individuell gefördert wird.",
      image: "TESTBILD 4",
    },
    {
      title: "Schwimmbad Reckholdern",
      text: "Das Schwimmbad Pfungen ist ein beliebter Treffpunkt für Jung und Alt, besonders an heißen Sommertagen. Mit seinem großzügigen Becken, einer schönen Liegewiese und einem separaten Kinderbereich bietet es Spaß und Erholung für die ganze Familie. Ob zum Bahnenziehen, Planschen oder einfach zum Sonnenbaden – das Schwimmbad ist der perfekte Ort, um den Alltag hinter sich zu lassen. Für uns Pfungener ist es nicht nur ein Freizeitort, sondern auch ein Stück Gemeinschaft, wo man Freunde trifft und neue Bekanntschaften knüpft.",
      image: "TESTBILD 5",
    },
    {
      title: "Wald",
      text: "Der Wald rund um Pfungen ist eine grüne Oase und ein wichtiger Teil unseres Dorfes. Er lädt zu Spaziergängen, Joggingrunden oder gemütlichen Stunden in der Natur ein. Mit seinen gut gepflegten Wegen und den vielfältigen Baum- und Pflanzenarten ist er ein Ort der Ruhe und Erholung. Für uns Pfungener ist der Wald nicht nur ein Naherholungsgebiet, sondern auch ein Lebensraum für viele Tiere und ein Symbol für die natürliche Schönheit unserer Umgebung. Egal ob Jung oder Alt – der Wald ist ein Ort, den wir alle schätzen und schützen.",
      image: "TESTBILD 6",
    },
    {
      title: "Pickanto",
      text: "Pickanto ist der Geheimtipp für alle Dönerliebhaber in Pfungen und Umgebung. Mit frischen Zutaten, hausgemachten Saucen und knusprigem Brot bietet Pickanto Dönergenuss auf höchstem Niveau. Ob klassischer Döner, vegetarische Varianten oder leckere Beilagen – hier ist für jeden etwas dabei. Der gemütliche Laden ist nicht nur ein Ort für gutes Essen, sondern auch für freundlichen Service und eine entspannte Atmosphäre. Für uns Pfungener ist Pickanto mehr als nur ein Imbiss – es ist ein fester Bestandteil des Dorflebens..",
      image: "TESTBILD 7",
    },
    {
      title: "Töss",
      text: "Die Töss ist ein markanter Fluss, der durch Pfungen fließt und einen großen Teil des natürlichen Charakters unseres Dorfes prägt. Mit ihren ruhigen Abschnitten und kleinen Stromschnellen bietet die Töss nicht nur eine malerische Kulisse, sondern auch zahlreiche Möglichkeiten für Freizeitaktivitäten wie Wandern, Radfahren oder einfach zum Entspannen am Ufer. Der Fluss ist ein wichtiges Element unserer Umgebung und für viele Pfungener ein Ort, um die Natur zu genießen und zur Ruhe zu kommen.",
      image: "TESTBILD 8",
    },
    {
      title: "Mühlibach",
      text: "Der Mühlibach ist ein kleiner, aber bedeutender Bach in Pfungen, der durch das Dorfgebiet fließt. Er hat historisch eine wichtige Rolle gespielt, insbesondere in der Wasserversorgung der früheren Mühlen. Heute bietet der Mühlibach eine idyllische Kulisse für Spaziergänge und ist ein wichtiger Teil der naturnahen Landschaft in der Region. Der Bach trägt nicht nur zur Schönheit unserer Umgebung bei, sondern ist auch Lebensraum für zahlreiche Pflanzen und Tiere. Für die Pfungener ist der Mühlibach ein ruhiger Rückzugsort und ein wertvoller Teil unseres lokalen Ökosystems.",
      image: "TESTBILD 9",
    },
    {
      title: "Weiher",
      text: "Der Weiher in Pfungen ist ein charmantes Gewässer, das besonders im Sommer eine beliebte Anlaufstelle für Naturfreunde ist. Umgeben von grünen Wiesen und Bäumen, bietet der Weiher eine ruhige Atmosphäre, ideal für Spaziergänge oder einfach zum Entspannen. Der Weiher ist auch ein wichtiger Lebensraum für viele Tiere und Pflanzen und trägt zur Biodiversität der Region bei. Für die Pfungener ist der Weiher ein schönes Naherholungsgebiet, das sowohl Erholung als auch Naturerlebnis direkt vor der Haustür bietet.",
      image: "TESTBILD 10",
    },
    {
      title: "Multberg",
      text: "Der Multberg ist eine markante Erhebung in der Umgebung von Pfungen und ein beliebtes Ziel für Wanderer und Naturfreunde. Mit seiner idyllischen Lage bietet der Multberg nicht nur einen schönen Blick auf das Dorf und die Umgebung, sondern auch zahlreiche Wanderwege und Möglichkeiten für Outdoor-Aktivitäten. Der Berg ist ein hervorragender Ort, um dem Alltag zu entfliehen und die Ruhe der Natur zu genießen. Für viele Pfungener ist der Multberg ein wunderbarer Rückzugsort und ein wichtiger Teil der regionalen Landschaft.",
      image: "TESTBILD 10",
    },
    {
      title: "Bahnhof",
      text: "Der Bahnhof Pfungen ist ein wichtiger Verkehrsknotenpunkt für das Dorf und die umliegende Region. Mit seiner guten Anbindung an Winterthur und Zürich bietet er sowohl Pendlern als auch Reisenden eine schnelle und unkomplizierte Verbindung zu den größeren Städten. Der Bahnhof ist modern ausgestattet und sorgt für einen bequemen Einstieg in die öffentlichen Verkehrsmittel. Für uns Pfungener ist der Bahnhof nicht nur ein praktischer Ort, sondern auch ein Symbol für die gute Erreichbarkeit und Vernetzung unseres Dorfes.",
      image: "TESTBILD 10",
    },
    {
      title: "Shopping",
      text: "In Pfungen finden sich zahlreiche Einkaufsmöglichkeiten für den täglichen Bedarf, darunter die Migros und Denner, die beide eine breite Auswahl an Lebensmitteln und Haushaltswaren bieten. Ob für den großen Wocheneinkauf oder schnelle Besorgungen – diese beiden Supermärkte sind beliebte Anlaufstellen für die Pfungener. Wer zwischendurch Lust auf einen schnellen Snack hat, kann bei Burger King vorbeischauen, der im Ort ebenfalls vertreten ist. Diese bekannten Marken tragen zu einer hohen Lebensqualität bei und machen Pfungen noch attraktiver für seine Bewohner.",
      image: "TESTBILD 10",
    },
    {
      title: "Industrie",
      text: "Pfungen beheimatet nicht nur eine idyllische Landschaft, sondern auch eine starke industrielle Präsenz. Ein wichtiger Akteur in der Region ist DB Schenker, ein global agierendes Logistikunternehmen, das in Pfungen einen Standort für Warenlagerung und Distribution betreibt. Darüber hinaus sind auch andere Unternehmen aus verschiedenen Branchen in der Region angesiedelt, die zur wirtschaftlichen Vielfalt und zum Wachstum von Pfungen beitragen. Diese Industriebetriebe bieten Arbeitsplätze und stärken die lokale Wirtschaft, wobei sie gleichzeitig durch ihre Nähe zu wichtigen Verkehrsanbindungen, wie dem Bahnhof und den Straßen, strategische Vorteile genießen.",
      image: "TESTBILD 10",
    },
  ];

  return (
    <div className="pfungen-page">
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>
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
            <div className="content-box image-box">{block.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pfungen;
