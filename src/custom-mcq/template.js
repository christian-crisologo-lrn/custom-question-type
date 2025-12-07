export default {
  'inline-mcq': [
    {
      name: 'Inline MCQ',
      description: 'Inline MCQ',
      group_reference: 'other',
      defaults: {
        type: 'custom',
        js: {
          question: `${BASE_URL}/questions/inline-mcq/question.js`,
          scorer: `${BASE_URL}/questions/inline-mcq/scorer.js`
        },
        css: `${BASE_URL}/questions/inline-mcq/question.css`,
        content: `<p><strong>1</strong>&nbsp; The trip is on {{response}}.</p>

<p><strong>2</strong>&nbsp; The coach leaves school at {{response}}.</p>`,
        responses: [
          {
            options: [
              {
                value: 'Friday'
              },
              {
                value: 'Saturday'
              },
              {
                value: 'Sunday'
              }
            ],
            distractorRationale: `
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              semper mattis erat, ac porttitor lectus sagittis eu. Fusce rutrum
              sollicitudin lacus, pretium varius nunc vulputate vitae. Suspendisse a
              mi dui. Duis nec laoreet orci. Phasellus id faucibus est, vel commodo
              metus. Suspendisse potenti. Sed sit amet pretium urna.</p>
            `
          },
          {
            options: [
              {
                value: '8:30'
              },
              {
                value: '9:30'
              },
              {
                value: '11:30'
              }
            ],
            distractorRationale: `
              <p>Duis euismod at turpis sed aliquam. Morbi lacus lacus, feugiat
              bibendum rutrum non, vulputate sed neque. Mauris quis venenatis mi. In
              eleifend sollicitudin diam, at tincidunt quam aliquet ut. Curabitur
              sem purus, placerat convallis ante vel, suscipit pharetra ligula. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Vestibulum accumsan eget mi vitae commodo. Pellentesque
              tristique orci orci, sit amet euismod lorem laoreet at. Morbi tincidunt
              pulvinar nibh non lacinia. Vivamus aliquam porta ex, nec semper arcu
              vestibulum nec. Ut ut sapien ex. Integer sed vestibulum augue.</p>
            `
          }
        ],
        valid_response: {
          value: [1, 2],
          score: 1
        }
      }
    }
  ]
};
