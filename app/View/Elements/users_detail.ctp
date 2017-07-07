<div class="listiinDetails_heading col-xs-12" id="admin_eventParticipants">
    <div style="margin-left:36%;font-size: xx-large;"><?php echo $event_name." Participants";?></div><br>
    <table style="margin:auto; border:3px solid #333;">
        <tbody>
            <tr style="background-color:#000; color: #FFF">
                <td style="font-size:20px;"><strong>S No.</strong></td>
                <td><strong>Name</strong></td>
                <td><strong>Mobile No</strong></td>
                <td><strong>E-mail</strong></td>
                <td><strong>Institute</strong></td>
                <td><strong>Year</strong></td>
                <td><strong>City</strong></td>
            </tr>

            <?php

            $i=1;
            foreach($user_info as $user):?>
            <tr style="background-color:#F0F0F0; color:#000">
                <td><?php echo $i++; ?></td>
                <td><?php echo $user['name'];?></td>
                <td><?php echo $user['mobile'];?></td>
                <td><?php echo $user['email'];?></td>
                <td><?php echo $user['Institute'];?></td>
                <td><?php echo $user['year'];?></td>
                <td><?php echo $user['city'];?></td>
            </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</div>