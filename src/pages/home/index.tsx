import React from "react";
import { Box, Container, GreenSpan, Title, Text } from "../../assets/styles/styled";
import Menu from "../../components/menu";
import "./home.scss";

import EcologicImage from '../../assets/images/imagehome.png';

export default function Home() {
    return (
        <>
            <Menu />
            <Container
                paddingTopMenu={6}
                paddingLeft={8}
                paddingRight={8}
            >
                <section className="banner">
                    <Title fontSize="big" fontWeight={900}>
                        <GreenSpan>Eco</GreenSpan>World
                        <GreenSpan>,</GreenSpan> para nós o lixo não é somente lixo
                        <GreenSpan>.</GreenSpan>
                    </Title>
                </section>
                <section className="aboutProject">
                    <div className="texts">
                        <Title fontSize="default" color="#000000">
                            <GreenSpan>Quem </GreenSpan>somos
                            <GreenSpan>?</GreenSpan>
                        </Title>
                        <Text
                            color="#000000"
                            marginTop={.5}
                            textAlign="justify"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text
                            color="#000000"
                            marginTop={.75}
                            textAlign="justify"
                        >
                            Maecenas pretium maximus lectus, ac auctor odio vulputate tempor. Suspendisse potenti.
                            Maecenas ac massa rhoncus justo condimentum placerat non ac mi. Cras tempus fringilla
                            convallis. Morbi scelerisque urna in elementum varius. Donec erat erat, finibus
                            facilisis congue eu, condimentum sit amet magna. Sed commodo nisl vel ex mattis dictum.
                            Quisque viverra eros ac risus aliquet viverra. Nunc tincidunt risus ac elit interdum,
                            sed vestibulum neque venenatis. Vivamus nisl arcu, sagittis quis sapien et, varius
                            laoreet est.
                        </Text>
                    </div>
                    <img src={EcologicImage} alt="ecologic-inage" />
                </section>
                <section className="boxes">
                    <Box width={100}>
                        <span>Vidro</span>
                    </Box>
                    <Box width={100}>
                        <span>Papel</span>
                    </Box>
                    <Box width={100}>
                        <span>Plástico</span>
                    </Box>
                    <Box width={100}>
                        <span>Orgânico</span>
                    </Box>
                </section>
            </Container>
        </>
    );
}