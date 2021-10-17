import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    style:{
    lineheight: 1.5,
    fontsize: 14,
    fontFamily:  "Segoe UI", 
    // color: #616161,  
    boxsizing: 'inherit',
    padding: 24,
    },
}));


export default function Form() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

<form method="GET" action="?"><ul class="stepper demos" id="feedbacker">
                  <li class="step done">

                     <div data-step-label="It's just a second..." class="step-title waves-effect waves-dark">Step 1</div>
                     <div class="step-content" >
                        <div class="row">
                           <div class="input-field col s12">
                              <input id="feedback_email" name="feedback_email" type="email" class="validate valid" required=""/>
                              <label for="feedback_email" class="active">Your e-mail</label>
                           </div>
                        </div>
                        <div class="step-actions">
                           <button class="waves-effect waves-dark btn blue next-step" data-feedback="someFunction">CONTINUE</button>
                        </div>
                     </div>

                  </li>

                  <li class="step active">
                     <div class="step-title waves-effect waves-dark">Step 2</div>
                     <div class="step-content" >
                        <div class="row">
                           <div class="input-field col s12">
                              <input id="feedback_password" name="feedback_password" type="password" class="validate invalid" required=""/>
                              <label for="feedback_password" class="">Your password</label>
                           </div>
                        </div>
                        <div class="step-actions">
                           <button class="waves-effect waves-dark btn blue next-step" data-feedback="someFunction">CONTINUE</button>
                           <button class="waves-effect waves-dark btn-flat previous-step">BACK</button>
                        </div>
                     </div>

                  </li>

                  <li class="step">
                     <div class="step-title waves-effect waves-dark">Step 3</div>
                     <div class="step-content">
                        Finish!
                        <div class="step-actions">
                           <button class="waves-effect waves-dark btn blue" type="submit">SUBMIT</button>
                        </div>
                     </div>
                  </li>

               </ul></form>
</div>
);
}