<template>
  <div class="container">
    <h1>Refund Policy</h1>
    <hr />
    <ol>
      <li class="bold">Unsatisfactory initial Session</li>
      <p>
        Clients dissatisfied with the initial one-on-one session may request a
        50% refund within 7 days of the session. Alternatively, they can opt for
        a redo of the session with another team member at no extra charge.
      </p>
      <li class="bold">Unlimited Revision Clause</li>
      <p>
        Clients have the right to unlimited revisions as promised. However, if
        after 5 revisions, the client remains unsatisfied, they may request a
        refund of up to 30% of the service fee. This is in line with ensuring
        good faith and fair dealings, as mandated by the Consumer Act.
      </p>
      <li class="bold">Premium Pricing Concerns</li>
      <p>
        Should the client feel that the service doesn't match the premium
        pricing, they can lodge a formal complaint. Post-review, they may be
        eligible for a 20% refund or additional services to match the value.
      </p>
      <li class="bold">Guaranteed Success Clause</li>
      <p>
        If the outline doesn’t lead to securing a contract within 6 months of
        use, a refund of 25% can be availed by the client. This is under the
        stipulation that they demonstrate active attempts to secure contracts.
      </p>
      <li class="bold">Response Time</li>
      <p>
        Our team promises to respond to revision requests within 3 business
        days. A delay beyond this period will make the client eligible for a 10%
        refund as compensation.
      </p>
      <li class="bold">Cancellation Policy</li>
      <p>
        Clients can cancel a scheduled session with a full refund if done at
        least 48 hours in advance. Cancellations within 48 hours will incur a
        20% cancellation fee, in line with ensuring mutual respect of time.
      </p>
      <li class="bold">Scope of Work Discrepancies</li>
      <p>
        If there's a disagreement regarding the delivered versus promised work,
        the issue can be escalated to the Department of Trade and Industry (DTI)
        for mediation, as provided under the Consumer Act.
      </p>
      <li class="bold">Technical Issues</li>
      <p>
        Technical glitches from our end leading to a disrupted session will
        entitle the client to a rescheduled session or a 15% refund.
      </p>
      <li class="bold">Feedback Period</li>
      <p>
        As per standard practice and in line with Philippine laws on service
        quality, clients have a 15-day window post-service delivery to raise
        concerns for refunds. Concerns raised post this period may not be
        entertained.
      </p>
      <li class="bold">Transparancy Clause</li>
      <p>
        Clients have the right to a detailed breakdown of costs. Any discrepancy
        found can be resolved with a refund of the overcharged amount, as
        aligned with the transparency provisions of the Philippine Consumer Act.
      </p>
    </ol>
  </div>
</template>

<script>
export default{
  name: 'RefundPolicyPage'
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  margin-top: 150px;
  text-align: justify;
}

* {
  color: black !important;
  font-family: "Poppins" !important;
  font-weight: 400 !important;
  line-height: 200% !important;
}

strong {
  font-weight: 800 !important;
}

a {
  color: #00b18f !important;
}

.bold {
  font-weight: bold !important;
}
</style>
