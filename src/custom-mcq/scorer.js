class InlineMcqScorer {
  constructor(question, responseValue) {
    this.question = question;
    this.responseValue = responseValue;
    this.validResponse = this.question.valid_response;
  }

  isValid() {
    if (!this.responseValue || !this.validResponse?.value) {
      return false;
    }

    for (let i = 0; i < this.question.responses.length; i += 1) {
      if (this.validResponse.value[i] !== this.responseValue[i]) {
        return false;
      }
    }

    return true;
  }

  validateIndividualResponses() {
    return this.isValid();
  }

  score() {
    return this.isValid() ? this.maxScore() : 0;
  }

  maxScore() {
    return (this.validResponse && this.validResponse.score) || 0;
  }

  canValidateResponse() {
    return !!this.validResponse?.value;
  }
}

/* global LearnosityAmd */
LearnosityAmd.define([], () => ({
  Scorer: InlineMcqScorer
}));
