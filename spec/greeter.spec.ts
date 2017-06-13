import { protractor } from 'protractor';
import { serenity } from 'serenity-js';
import { Actor, BrowseTheWeb, Open } from 'serenity-js/lib/screenplay-protractor';

import { CheckIfDisplayedMessage, EnterTheName } from './greeter';

describe('AngularJS', function() {
    this.timeout(60 * 1000);

    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    describe('Greeter', () => {

        beforeEach(() => stage.theActorCalled('James').attemptsTo(
            Open.browserOn('https://www.angularjs.org/'),
        ));

        it('greets people by name', () => stage.theActorInTheSpotlight().attemptsTo(
            EnterTheName.of('Bond, James Bond'),
            CheckIfDisplayedMessage.reads('Hello Bond, James Bond!'),
        ));
    });
});
