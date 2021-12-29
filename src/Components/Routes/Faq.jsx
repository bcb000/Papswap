import React, {useState} from 'react';
import "../../Styles/styles.css"

export const Faq = () => {

  const [toggleQues, settoggleQues] = useState(1);

  return (
    <div className='faq-container'>

      <div className='faq-card'>
      <div className='faq-heading'>Why papSwap?</div>
      <div className='faq-body'>If you are a political observer/ commentator PapSwap is the platform to be heard and get rewarded.</div>
      </div>

      <div className='faq-card'>
      <div className='faq-heading'>What is PapSwap?</div>
      <div className='faq-body'>PapSwap is a decentralised blockchain network for political observer and commentator to earn Valuable Virtual Digital Coins through early content mining .</div>
      </div>

      

      <div className='faq-card'>
      <div className='faq-heading'>Paps stands for?</div>
      <div className='faq-body'>PapTokens are stand for Potential and Performance Virtual Digital Coins which can be earned at Papswap. through easy content mining.</div>
      </div>

      <div className='faq-card'>
      <div className='faq-heading'>What is the value of PapToken?</div>
      <div className='faq-body'>PapTokens are transferable and can be traded through PapSwap in the future but in the early stages, you can purchase gift vouchers with Paps.</div>
      </div>

      <div className='faq-card'>
      <div className='faq-heading'>Is PapToken a crypto-currency?</div>
      <div className='faq-body'>PapTokens are sometimes considered as Cryptocurrency, which is not true. Pap coins are digital coins.</div>
      </div>

      <div className='faq-card'>
      <div className='faq-heading'>Is PapSwap Eco-friendly?</div>
      <div className='faq-body'>PapTokens are eco-friendly and do not require massive electricity/heat affecting the environment. Papcoins does not use cryptic mining yet your Identity and transaction are both secured through public and private keys. No need to buy huge external hardware to mine Papcoins, just you and your mobile phone.</div>
      </div>
      
      
    </div>
  )
}
