import React from 'react'
import './About.css'
import ContentLeft from '../../components/ContentLeft/ContentLeft'

const About = () => {
  return (<>
    <div className='content about-content'>
      <ContentLeft fixed={true} />
      <div className='content-right-main'>
        <div className='content-right-1'>
          <div className='content-right-header'>About me</div>
          <div className='content-right-header-poster'>
            <div className='content-right-header-poster-bullet'>
              <div className='content-right-header-poster-heading'>You'll know<br />everything about<br />me here.</div>
              <img alt='session quotes' src={require('../../assets/quote.png')} className='quote-image' />
              <div className='content-right-header-poster-para'>Unveil the secrets of my transformative odyssey, discovering the mystical origins that paved
                the way for my liberation</div>
            </div>
            <img src={require('../../assets/about-picture.jpg')} className='content-right-header-poster-image' alt='about-img' />
          </div>

          <div className='content-right-story'>
            <div className='content-right-story-para'>
              <img alt='session quotes' src={require('../../assets/quote.png')} className='quote-image-2' />
              <div className='content-right-story-quoted'>Unveil the secrets of my transformative odyssey, discovering the mystical origins that paved
                the way for my liberation</div>
              <br />
              <p>
                Rishi is not a coach, therapist, guru, or yogi. he is an agent, advisor to the opening
                of an individual&apos;s being. Inner Depth (ID) shows you what you are and is the core of
                individuality. The way you access it has been a mystery. Hence, the great
                sages and saints of ancient India (Rishi&apos;s) were known for their conquests and journeys.
                The essence of the universe and one&apos;s existence was their fascination. That inner
                experience and knowledge was translated and prescribed to many. While other viewed
                this wisdom as folk lore. It&apos;s no coincidence that Rishi (present day) positioned himself
                as the vessel to sharpen your intellect and motivate you beyond tradition,
                culture, society, and religion. His purpose has been to unlearn everything that has been
                taught, and to relish in the world of creativity. <br /><br />
                His fascination with the creative expression (CE) began with observation and No Thought Mind (NTM). “The one
                who self evaluates finds depth, while the one who chooses to believe without
                (BW) experience—remains DULL.” Rishi is a critic of spiritual communities often riddled
                with phony holy wokeness and structured systems riddled with manipulation. He warns
                against staying trapped in a conditioned mind. Rishintentions, born out of a
                quest, aims at liberating one&apos;s own mind and body. He offers you an invitation for your
                creative expressnio to thrive.</p>

            </div>
            <div className='about-story-img-collab'>
              <div className='story-img-div'>
                <img className='story-img' src={require('../../assets/story-discussion-img.jpg')} alt="story-img" />
              </div>
              <div className='about-story-img-div'>
                <img className='about-story-img' src={require('../../assets/about-picture.jpg')} alt="about-story-img" />
              </div>
            </div>
            <div className='content-right-story-para-2'>
              <div className='content-right-mystory-heading'>My Story</div>
              <br />
              <p>Hey, I’m Rishi. I won&#39;t dwell on achievements or tell you I am special. I want to share what led
                me to what I do. My true illumination comes from dedicating myself to mind, body, and soul.
                As corny as that may sound, my big ego and doubt were the initial drivers of my self-
                exploration. The consequence was experiencing, learning, unlearning behaviors, and
                overcoming mental feats. I dismantled many facets of who I thought I was. I challenged
                family, societal norms, politics, drinking/drugs, and unfulfilling jobs—all that contradicted my
                existence. This sparked a mystical passion, propelling me into the realms of life&#39;s mysteries,
                nature&#39;s secrets, and the cosmic dance of human existence. I formed this platform after many
                teachers and mentors kept saying that I needed a platform to share and connect with other.
                One day, after deep silence, it came, “Help people redefine their life&#39;s intentions to become
                better at BEING.” RISHINTENTIONS</p>

            </div>
          </div>
          {/* <div className='content-right-brief'>
            <div className='content-right-brief-intro'>HEY, I'M RISHI<br/>NAGPAL</div>
            <img src={require('../../assets/rishi-image-removebg-preview.png')} className='rishi-img' alt='rishi-img'/>
          </div> */}
          <div className='content-right-experience'>
            <img src={require('../../assets/rishi-exp-img.png')} className='content-right-experience-img' alt='rishi-img' />
            <div className='content-right-experience-flex'>
              <div className='content-right-experience-header'>Experience</div>
              <div className='content-right-experience-para'>
                <div className='experience-item'>
                  <div className='experience-text'><p>01</p>Applied Physics</div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'>Philosophy<p>02</p></div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'><p>03</p>Quantum Mechanics</div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'>Yoga and Meditation<p>04</p></div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'><p>05</p>Physical Fitness</div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'>Applied Physics<p>06</p></div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'><p>07</p>Philosophy</div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'>Quantum Mechanics<p>08</p></div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'><p>09</p>Yoga and Meditation</div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>

                <div className='experience-item'>
                  <div className='experience-text'>Physical Fitness</div>
                  <div className='exptip'>
                    <p>"</p>
                    <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
                    <p>name</p>
                    <p>designation</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className='content-right-getstarted'>
          @Rishintentions
        </div>
      </div>
    </div>
  </>
  )
}

export default About