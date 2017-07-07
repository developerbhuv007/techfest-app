<div class="adminOrganisers_table col-xs-12" style="margin-top: 15px;">
    <div style="margin-left:36%;font-size: xx-large;"><?php echo $role." Details";?></div><br>
        <table style="margin:auto; border:3px solid #333;">               
            <tbody>
                <tr style="background-color:#000; color: #FFF">
                    <td style="font-size:20px;"><strong>S No.</strong></td>
                    <td style="font-size:20px;"><strong>Name</strong></td>
                    <td style="font-size:20px;"><strong>Designation</strong></td>
                    <td style="font-size:20px;"><strong>Role</strong></td>
                    <td style="font-size:20px;"><strong>Mobile</strong></td>
                    <td style="font-size:20px;"><strong>E-mail</strong></td>
                </tr>
                <?php

                $i=1;
                 foreach($ormin_info as $ormin):?>
                 <tr>
                    <td><?php echo $i++; ?></td>
                    <td><?php echo $ormin['name'];?></td>
                    <td><?php echo $ormin['designation'];?></td>
                    <td><?php echo $ormin['role'];?></td>
                    <td><?php echo $ormin['mobile'];?></td>
                    <td><?php echo $ormin['email'];?></td>
                 </tr>
                <?php endforeach;?>
            </tbody>
        </table>
</div>