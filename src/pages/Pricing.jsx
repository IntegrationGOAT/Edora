import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: 'per month',
      description: 'Perfect for small schools just getting started',
      features: [
        'Up to 500 students',
        'Basic SSO integration',
        'Resource management',
        'Basic analytics',
        'Email support'
      ],
      recommended: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$199',
      period: 'per month',
      description: 'Ideal for growing schools with advanced needs',
      features: [
        'Up to 2000 students',
        'Advanced SSO integration',
        'Resource library & management',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      recommended: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large institutions with custom requirements',
      features: [
        'Unlimited students',
        'Enterprise SSO & security',
        'Advanced resource management',
        'Custom analytics & reporting',
        'Dedicated support',
        'Custom development',
        'SLA guarantees',
        'On-premise options'
      ],
      recommended: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <div className={styles.pricing}>
      <div className={styles.header}>
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that's right for your institution</p>
      </div>

      <div className={styles.planGrid}>
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`${styles.plan} ${plan.recommended ? styles.recommended : ''}`}
          >
            {plan.recommended && (
              <div className={styles.recommendedBadge}>Recommended</div>
            )}
            <div className={styles.planHeader}>
              <h2>{plan.name}</h2>
              <div className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.description}>{plan.description}</p>
            </div>

            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              to={plan.name === 'Enterprise' ? '/contact' : '/register'} 
              className={`${styles.button} ${plan.recommended ? styles.primaryButton : styles.secondaryButton}`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Can I switch plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, wire transfers, and purchase orders for enterprise customers.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Is there a setup fee?</h3>
            <p>No, there are no hidden fees. The price you see is what you'll pay.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Do you offer educational discounts?</h3>
            <p>Yes, we offer special pricing for educational institutions. Contact our sales team for more information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;