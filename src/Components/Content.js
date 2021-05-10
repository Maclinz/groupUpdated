import React from 'react'
import styled from 'styled-components';
import content from '../data/content';
import ReadButton from '../Components/ReadButton';

function Content() {
    return (
        <ContentStyled>
            <ContentContainerStyled>
                {
                    content.map((item) =>{
                        return <div className="content-item" key={item.id}>
                           <div className="inner-content">
                                <div className="image">
                                    <img src={item.images[0]} alt=""/>
                                    <p style={{backgroundColor: item.cat_bg}}>{item.category}</p>
                                </div>
                                <h3 className="u-h-m-top">{item.title}</h3>
                                <p className="paragraph" >{item.text1}
                                    <ul>
                                       
                                    </ul>
                                </p>
                                <h3>{item.title2}</h3>
                                <div className="image">
                                    {/*Image 2 comes here*/}
                                    <img src={item.images[1]} alt=""/>
                                </div>
                                <p className="paragraph" >{item.text2}</p>
                                <ReadButton link={item.link} />
                            </div>
                        </div>
                    })
                }
            </ContentContainerStyled>
        </ContentStyled>
    )
}


const ContentStyled = styled.main`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    .content-item{
        border: 2px solid var(--border-grey-color);
        border-radius: 2rem;
        margin-bottom: 2rem;
        .inner-content{
            .image{
                position: relative;
                width: 100%;
                display: flex;
                img{
                    width: 100%;
                }
                p{
                    position: absolute;
                    padding: .3rem 1rem;
                    border-radius: 3rem;
                    top: 10%;
                    right: 0;
                }
            }
            h3{
                font-size: 1.5rem;
                &:not(:last-child){
                    
                }
            }
        }
    }
`;
const ContentContainerStyled = styled.div`

`;

export default Content;
