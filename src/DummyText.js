import React from 'react';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';

const dummyTextData = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, tempor ut turpis eget, congue ullamcorper nisi. Praesent ac venenatis quam. Proin porta velit at pharetra maximus. Quisque at augue fringilla, tincidunt elit sit amet, vestibulum eros. Duis eu diam volutpat, ullamcorper mauris feugiat, porttitor odio. Pellentesque leo mi, pulvinar eu condimentum ut, viverra eu enim. Curabitur maximus nisl quis augue consequat, et mollis velit pretium. Nulla faucibus ac augue eget gravida. Sed vel feugiat arcu, ut interdum enim. Aenean mattis metus neque, vel dictum leo semper ut. Nam finibus dolor risus, fermentum pulvinar augue pretium eu. Praesent vehicula faucibus finibus. Fusce vel ultrices risus. Cras magna ante, hendrerit a neque a, suscipit tincidunt arcu. Maecenas ac felis in ligula pulvinar pellentesque.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean luctus vehicula nibh id placerat. Fusce non rhoncus odio, non tincidunt ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec consectetur augue, quis venenatis tellus. Praesent auctor tortor neque, vel semper dolor fringilla quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sollicitudin velit. Donec et lacus enim. Nullam elementum condimentum sem a vulputate. Aliquam maximus accumsan blandit.

Pellentesque euismod fermentum orci, eu venenatis dui porttitor et. Nulla maximus tellus at accumsan blandit. Etiam id mauris a justo laoreet convallis vel nec tortor. Donec vulputate, quam vitae consectetur sagittis, mauris nunc gravida velit, ut blandit lectus risus a felis. In quis tristique elit, in mollis massa. Fusce ultricies commodo nunc non bibendum. Vivamus nec augue a magna pharetra aliquet in ut nulla. Ut consectetur scelerisque lorem vitae molestie. Vivamus faucibus dolor a pharetra iaculis. Cras porttitor sem eget consequat placerat. Vestibulum quis turpis purus. Phasellus consectetur mauris venenatis ante posuere, vel mattis magna tempus. Duis porttitor, erat id ullamcorper gravida, dui neque mollis lorem, at interdum leo diam sit amet mauris. Phasellus ut efficitur purus, et fermentum tellus. Vivamus fringilla tortor id dignissim posuere. Praesent non nunc erat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed accumsan ligula. Mauris rhoncus ante sit amet elit ultricies lobortis. Morbi fringilla tincidunt sem eget tempor. Nullam tempus leo eget vestibulum euismod. Suspendisse lorem nisl, euismod et leo ut, pellentesque mattis nisl. In id tortor tellus. Integer nec feugiat tellus. Fusce faucibus tellus non mi porta, quis tincidunt turpis semper. Curabitur egestas massa et eros volutpat, vitae hendrerit nibh faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eleifend, lacus tincidunt vehicula molestie, dui ligula ullamcorper dui, volutpat sodales ex nisi vitae orci. Maecenas fermentum metus elit, eget tempus nibh aliquet a. Donec gravida velit ex, sed tincidunt dui varius at.

Sed convallis, erat ut varius sagittis, ligula nunc venenatis ligula, vel tincidunt ex libero in elit. Suspendisse consequat hendrerit vestibulum. Maecenas eget enim non nisi accumsan scelerisque. Integer egestas, tellus quis dignissim ullamcorper, urna arcu egestas nibh, sit amet placerat nunc massa nec augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at nisi eget sapien pretium mollis. Integer massa urna, accumsan sed turpis eget, mattis condimentum diam. Nullam nibh neque, dignissim ac lacus vel, rutrum interdum dolor. Duis eu ultricies orci, ut mattis eros.

Aenean sollicitudin quam vel risus ultricies, ut dignissim erat fringilla. Proin id lobortis risus, eu accumsan nisi. Aenean ornare ipsum sed libero cursus, non convallis sapien malesuada. Phasellus eget ultricies urna. Maecenas sagittis neque vel congue varius. Nam eros velit, dapibus vel porttitor nec, luctus quis diam. Pellentesque maximus luctus sollicitudin. Aliquam quis malesuada magna. Cras vitae scelerisque turpis. Cras in turpis quis nibh fringilla ullamcorper eget sed leo.

Cras lobortis enim leo, nec ultricies purus bibendum vel. Pellentesque auctor nisi non lorem venenatis tristique. Etiam congue odio vitae est elementum lacinia. In facilisis diam nec massa egestas lobortis. Quisque ornare turpis sit amet consectetur vestibulum. Fusce vel congue turpis, vel scelerisque libero. Aenean velit ipsum, egestas quis neque id, tempus molestie diam. Morbi sit amet massa mi. Etiam tristique dolor ac gravida hendrerit. Fusce bibendum porta lectus, ut porta orci sodales id. Sed dictum ante tortor, et blandit tortor condimentum nec. Donec at erat non erat fringilla suscipit. Nunc interdum, felis id pretium egestas, sem libero pharetra mauris, vitae auctor est tellus non justo. Morbi fringilla, leo nec maximus lacinia, odio justo interdum dui, at tristique felis est at orci.

Aliquam vel efficitur ante. Phasellus fringilla elit nisl, at interdum velit tincidunt vel. Quisque accumsan ipsum enim, eu cursus nisi pharetra nec. Vestibulum vestibulum scelerisque dui eu viverra. Proin sit amet mi vitae sapien pretium mattis non vitae metus. Aenean vel ante nulla. Curabitur nec magna lacinia magna lacinia hendrerit. Suspendisse ut justo efficitur elit tincidunt scelerisque. Vestibulum at congue ante. Aenean vulputate dictum arcu. Etiam eu consectetur nisl, vitae blandit justo. In odio lorem, condimentum ultrices odio a, imperdiet auctor enim. Aliquam ac orci eu metus iaculis venenatis.

Aliquam augue magna, congue id ullamcorper et, vulputate feugiat augue. Curabitur ut fringilla nulla, eget sollicitudin metus. Morbi accumsan dignissim turpis, sed venenatis nisl accumsan ac. Sed vestibulum pharetra nunc, at elementum neque. Phasellus nec rutrum est, ac tincidunt elit. Sed dapibus tristique pulvinar. Donec justo libero, viverra at cursus in, scelerisque nec nulla. Vestibulum dignissim justo vitae felis commodo, in tristique tortor posuere. Donec condimentum nisl vel rutrum gravida. Sed ut ornare odio.

Cras elit augue, imperdiet non viverra et, accumsan in ante. Curabitur quis nunc ut ante rutrum faucibus eu eu turpis. Integer egestas erat id ante volutpat laoreet sed et turpis. Fusce dictum lectus id lectus laoreet iaculis. Nam non erat sollicitudin, porta tellus quis, pellentesque ex. Donec sit amet auctor mi. Cras at justo dolor. `;

const paperStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2)
    }
}));

function DummyText() {
    const classes = paperStyle();
    return (
        <Container maxWidth="sm">
                <Paper className={classes.root}>
                    {dummyTextData}
                </Paper>
        </Container>
    )
}

export default DummyText;