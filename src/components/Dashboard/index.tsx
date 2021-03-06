import React from "react";
import { Container, SectionRelatorios, MainMenu, MainSection, 
        BoasVindas, DadosValores, DadosLeft, DadosRight, 
        SectionProgressBar, SectionRanking, DadosRanking, RankingLeft,
         RankingRight, PrimaryRanking, SecondaryRanking } from "./style";
import Header from "../Header";
import Menu from "../Menu";
    
function Dashboard(){
    return(

        <Container>

            <MainMenu> 
                <Menu/>
            </MainMenu>

            <MainSection>
                <Header/>
                
                <SectionRelatorios>
                    <BoasVindas>
                        <h1>Olá Bruno</h1><p>, aqui está seus dados</p>
                    </BoasVindas>
                    <DadosValores>
                        <DadosLeft>
                            <p>
                                Boletos para outubro
                            </p>
                            <h1>
                                25%
                            </h1>
                            <p style={{fontSize: '10px', fontWeight: 'bold'}}>
                                Valor variavel
                            </p>
                            <p style={{fontSize: '10px', fontWeight: 'bold'}}>
                                Pode aumentar ao decorrer do mês
                            </p>
                        </DadosLeft>
                        <DadosRight>
                       
                        
                        </DadosRight>
                    </DadosValores>
                </SectionRelatorios>

                <SectionProgressBar>

                </SectionProgressBar>

                <SectionRanking>
                    <DadosRanking>
                        <RankingLeft>
                            <PrimaryRanking>

                            </PrimaryRanking>
                            <SecondaryRanking>

                            </SecondaryRanking>
                        </RankingLeft>
                        <RankingRight>
                        
                        </RankingRight>
                    </DadosRanking>
                </SectionRanking>
            </MainSection>
            
        </Container> 

    );
}

export default Dashboard