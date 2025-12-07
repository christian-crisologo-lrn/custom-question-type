export default {
  custom_type: 'inline-mcq',
  type: 'custom',
  name: 'Inline MCQ',
  editor_layout: `${BASE_URL}/questions/inline-mcq/authoring_custom_layout.html`,
  js: {
    question: `${BASE_URL}/questions/inline-mcq/question.js`
  },
  css: `${BASE_URL}/questions/inline-mcq/question.css`,
  version: 'v1.0.0',
  editor_schema: {
    hidden_question: false,
    attributes: {
      content: {
        name: 'Content',
        type: 'editor',
        required: true
      },
      responses: {
        type: 'array',
        description: 'Responses with options',
        required: true,
        group: 'basic',
        items: {
          type: 'object',
          attributes: {
            options: {
              type: 'array',
              description: 'Options for this response',
              required: true,
              items: {
                type: 'object',
                attributes: {
                  value: {
                    description: 'Value for this option',
                    name: 'Value',
                    required: true,
                    type: 'text'
                  }
                }
              }
            },
            distractorRationale: {
              name: 'Distractor rationale',
              type: 'editor',
              required: true
            }
          }
        }
      },
      valid_response: {
        name: 'Attribute used for scoring',
        type: 'object',
        attributes: {
          score: {
            name: 'Points',
            description: 'Score awarded for the correct answer',
            type: 'number',
            required: true,
            default: 1
          },
          value: {
            name: 'Correct answer',
            required: true,
            type: 'question',
            white_list: ['content', 'responses']
          }
        }
      }
    }
  }
};
